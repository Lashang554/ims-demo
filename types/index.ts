
// Shared types for IMS

export type ItemType = "Fixed Asset" | "Consumable";

export type ItemStatus =
  | "Assigned"
  | "Unassigned"
  | "Damaged"
  | "Returned"
  | "Added"
  | "Updated";

export type ActivityCategory = "Electronics" | "Furniture" | "Office";

// State used by the Recent Activities filter
export type ActivitiesFilterState = {
  from: string;
  to: string;
  category: "" | ActivityCategory;
  itemType: "" | ItemType;
  status: "" | "Assigned" | "Unassigned" | "Damaged";
};
