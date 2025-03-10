import Controls from "./Controls";

export default function AnimalsListItem() {
  return (
    <div className="flex justify-between border-b border-b-secondary last:border-b-0 p-3">
       <p className="">Animal</p>
        <Controls/>
    </div>
  );
}
