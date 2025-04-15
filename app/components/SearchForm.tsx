import Form from "next/form";
import React from "react";
import SubmitButton from "./SubmitButton";
import { OccupationOption } from "../types";

const SearchForm = ({ options }: { options: OccupationOption[] }) => {
  return (
    <Form action="/search" className="space-y-8 max-w-xl">
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="occupation" className="text-lg font-semibold">
          Ametivaldkonnad
        </label>
        <select name="query" id="occupation" className="w-full text-red-600 border border-red-600 focus:border-red-600 focus:ring-red-800 duration-300 ease-out rounded-lg p-2">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </fieldset>
      <SubmitButton />
    </Form>
  );
};

export default SearchForm;
