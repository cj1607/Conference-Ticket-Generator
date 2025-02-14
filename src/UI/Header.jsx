/* eslint-disable react/prop-types */
import logo from "../assets/images/logo-full.svg";
export default function Header({ data }) {
  return (
    <header className="text-center md:w-4/5 lg:w-3/5 px-8 md:px-0 m-auto">
      <div>
        <img className="mx-auto my-8" src={logo} alt="logo" />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
        {data.view ? (
          <>
            Congrats,{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text font-extrabold text-transparent">
              {data.name}!
            </span>{" "}
            Your ticket is ready.
          </>
        ) : (
          "Your Jounrney to Coding Conf 2025 Starts Here!"
        )}
      </h1>
      <p className="text-xl my-6">
        {data.view ? (
          <>
            We&apos;ve emailed your ticket to{" "}
            <span className="text-orange-500">{data.email}</span> and will send
            updates in the run up to the event
          </>
        ) : (
          "Secure your spot at this year's biggest coding conference."
        )}
      </p>
    </header>
  );
}
