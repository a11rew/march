import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const courses = [
  { name: "UI/UX Design" },
  { name: "Front End Development" },
  { name: "Backend Development" },
  { name: "DevOps and Software Engineering" },
];

const Dropdown: React.FC<{
  selected: { name: string } | undefined;
  setSelected: React.Dispatch<
    React.SetStateAction<
      | {
          name: string;
        }
      | undefined
    >
  >;
}> = ({ selected, setSelected }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative flex justify-between cursor-default z-10 py-4 pl-8 pr-6 text-left w-[37%] border rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
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
          <Listbox.Options className="absolute mt-3 z-10 w-[37%] flex flex-col gap-1 bg-white overflow-auto text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {courses.map((course) => (
              <div key={course.name} className="bg-white rounded">
                <Listbox.Option
                  className={({ active, selected }) => {
                    return `${
                      selected || active
                        ? "text-white bg-[#47399D]"
                        : "text-black bg-tp"
                    }
                  rounded cursor-default select-none relative py-4 pl-8 pr-6 z-10`;
                  }}
                  value={course}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {course.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              </div>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Dropdown;
