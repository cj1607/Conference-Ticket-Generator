/* eslint-disable react/prop-types */
export default function Input({ label, ...props }) {
  return (
    <fieldset className="flex flex-col gap-1">
      <label className="w-full font-bold" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="w-full p-4 rounded-lg border bg-transparent"
        {...props}
      />
    </fieldset>
  );
}
