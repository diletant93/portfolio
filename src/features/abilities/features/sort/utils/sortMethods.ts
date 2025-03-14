import { Animal } from "../../filter/types/animal";

export function sortByField(
  items: Animal[],
  sortOption: string = "name-asc",
): Animal[] {
  const [field, direction] = sortOption.split("-");
  const order = direction === "asc" ? 1 : -1;

  return items.sort((a, b) => {
    let valueA: string | number = "";
    let valueB: string | number = "";

    if (field === "name") {
      valueA = a.name.toLowerCase();
      valueB = b.name.toLowerCase();
    } else if (field === "lifespan") {
      const getLifespanValue = (animal: Animal) => {
        const lifespan = animal.characteristics?.lifespan;
        if (lifespan && lifespan !== "unknown") {
          return Math.max(...(lifespan.match(/\d+/g)?.map(Number) || [0]));
        }
        return direction === "desc" ? -Infinity : Infinity;
      };

      valueA = getLifespanValue(a);
      valueB = getLifespanValue(b);
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB) * order;
    }

    // Corrected: multiply the whole difference by order.
    return ((valueA as number) - (valueB as number)) * order;
  });
}
