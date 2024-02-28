"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import AddMessage from "@/apiHelper/addMessage";
import { addNotification } from "@/stores/reducers/notificationReducer";
import { CircularProgress } from "@mui/material";

const Message = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("US");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const apiResult = await AddMessage({
        name: name,
        email: email,
        phone: phone,
        message: message,
      });

      if (apiResult.success === true) {
        dispatch(
          addNotification({
            id: new Date().valueOf(),
            message: "Message sent successfully",
            open: true,
            severity: "success",
          })
        );
      }
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      dispatch(
        addNotification({
          id: new Date().valueOf(),
          message: "Form submission failed",
          open: true,
          severity: "error",
        })
      );
      setLoading(false);
    }
  };
  return (
    <div className="bg-brand_bg">
      <div className="contactBg min-h-[80vh] px-10 md:px-20 py-20">
        <div className="relative text-xl  text-brand_headings  font-semibold">
          <p>GET IN TOUCH</p>
          <div className="absolute left-12 md:left-16 top-3 bg-brand_secondary bg-opacity-20 w-[30%] md:w-[20%] lg:w-[10%] h-[12px] "></div>
        </div>
        <div className="md:w-8/12 pt-6">
          <p className="text-3xl  text-white font-semibold">
            Send Us a Message and Learn More About our services.
          </p>
          <p className="text-brand_text text-sm pt-3">
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast
            ehicula leo, vel efficitur felis ultrices non. Cras a elit sit amet.
          </p>
        </div>
        <div className="pt-6">
          <div>
            <input
              className="w-full md:w-7/12 py-2 focus:outline-none bg-transparent border-b text-white placeholder:text-brand_text text-sm"
              type="text"
              placeholder="*Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <input
              className="w-full md:w-7/12 py-2 focus:outline-none  bg-transparent border-b text-white placeholder:text-brand_text text-sm"
              type="text"
              placeholder="*Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pt-10 w-full md:w-7/12">
            <IntlTelInput
              preferredCountries={["us"]}
              value={phone}
              containerClassName="intl-tel-input"
              inputClassName="form-control  focus:outline-none bg-transparent border-b text-white placeholder:text-brand_text text-sm"

              formatOnInit
              onPhoneNumberChange={(status, value, countryData, number, id) => {
                setPhone(number); // <-- use 'number' instead of 'value'
              }}
              onPhoneNumberBlur={(status, value, countryData, number, id) => {
                setPhone(number); // <-- use 'number' instead of 'value'
              }}
            />
          </div>
          <div className="pt-4">
            <textarea
              className="w-full md:w-7/12 py-2 focus:outline-none  bg-transparent border-b text-white placeholder:text-brand_text text-sm"
              rows={6}
              placeholder="*Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="pt-6">
            <button
              onClick={() => handleSubmit()}
              className="bg-brand_secondary rounded-md px-3 py-2 buttonShadow text-white  text-sm"
            >
              {loading ? (
                <div className="text-white ">
                  <CircularProgress color="inherit" size={20} />
                </div>
              ) : (
                "Send message"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;