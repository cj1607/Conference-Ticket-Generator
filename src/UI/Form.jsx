import ImageInput from "../Components/ImageInput";
import Input from "../Components/Input";

export default function Form() {
  return (
    <form className="w-5/6 md:w-4/5 lg:w-3/6 m-auto flex flex-col gap-4">
      <ImageInput />
      <Input
        label="Full Name"
        id="full-name"
        type="text"
        name="full-name"
        placeholder="Stephen Adewale"
      />
      <Input
        label="Email Name"
        id="email-name"
        type="email"
        name="email-name"
        placeholder="codewithme.stephen@gmail.com"
      />
      <Input
        label="GitHub Username"
        id="github"
        type="text"
        name="github"
        placeholder="@demostephen"
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-slate-900 p-3 rounded-lg font-extrabold"
      >
        Generate My Ticket
      </button>
    </form>
  );
}
