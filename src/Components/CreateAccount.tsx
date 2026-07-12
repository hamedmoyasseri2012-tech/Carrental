const CreateAccount = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>
          <h1>
            <span className="text-[#2563eb]">User</span> Sign Up
          </h1>
        </div>
        <div>
          <label className="text-[#4a5565] text-[14px]" htmlFor="">
            Name
          </label>
          <input
            className="w-full rounded-xl border border-[#ebe6e7] text-[#ebe6e7]"
            type="text"
            placeholder="type here"
          />
        </div>
        <div>
          <label className="text-[#4a5565] text-[14px]" htmlFor="">
            Email
          </label>
          <input
            className="w-full rounded-xl border border-[#ebe6e7] text-[#ebe6e7]"
            type="text"
            placeholder="type here"
          />
        </div>
        <div>
          <label className="text-[#4a5565] text-[14px]" htmlFor="">
            Password
          </label>
          <input
            className="w-full rounded-xl border border-[#ebe6e7] text-[#ebe6e7]"
            type="text"
            placeholder="type here"
          />
        </div>
        <div>
          <h1
            className="text-[#4a5565] text-[14px]"
          >
            Already have account?
            <span className="text-[#2563eb]">click here</span>
          </h1>
        </div>
        <div className="border bg-[#2563eb] text-white justify-center items-center rounded-2xl p-2 w-63.5 h-9">
          <button className="text-[14px] font-medium">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
