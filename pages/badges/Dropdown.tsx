import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const people = [
  { name: "UI/UX Design" },
  { name: "Front End Development" },
  { name: "Backend Development" },
  { name: "DevOps and Software Engineering" },
];

const Dropdown = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative flex justify-between cursor-default py-4 pl-8 pr-6 text-left w-[37%] border rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span className="block truncate">
            {selected?.name || "Select a field to see badges"}
          </span>
          <span className="flex items-center pr-2 pointer-events-none">
            <BsChevronDown />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 w-[37%] overflow-auto text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active, selected }) => {
                  console.log("active", { person, selected });
                  return `${
                    selected || active
                      ? "text-white bg-[#47399D]"
                      : "text-black bg-tp"
                  }
                  mb-1 rounded cursor-default select-none relative py-4 pl-8 pr-6`;
                }}
                value={person}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-amber-600" : "text-amber-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      ></span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Dropdown;
