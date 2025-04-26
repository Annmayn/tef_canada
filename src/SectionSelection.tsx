import { SECTIONS } from "./const.ts";

type SectionSelectionProps = {
  updateSection: (section: SECTIONS) => void;
};

const SectionSelection = ({ updateSection }: SectionSelectionProps) => {
  return (
    <select onChange={(e) => updateSection(e.target.value as SECTIONS)}>
      {Object.entries(SECTIONS).map(([key, val]) => {
        return (
          <option key={key} value={val}>
            {key.split("_").join(" ")}
          </option>
        );
      })}
    </select>
  );
};

export default SectionSelection;
