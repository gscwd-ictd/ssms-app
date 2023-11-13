import { User } from "./user";

export type ServiceRequest = {
  id: string;
  requestor: User;
  details: string;
  createdAt: Date;
};

export type ServiceRequestStatus = "queue" | "active" | "closed" | "cancelled";
