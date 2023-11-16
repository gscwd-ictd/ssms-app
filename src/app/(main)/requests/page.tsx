import { PageTitle } from "@ssms/components/features/navigations/ContentNavigation/PageTitle";
import { ServiceRequest } from "@ssms/utils/types/serviceRequest";
import axios from "axios";
import Image from "next/image";

const getAllRequests = async () => {
  try {
    return (await axios.get<ServiceRequest[]>("http://localhost:4000/service-requests")).data;
  } catch (error) {
    console.log(error, "this is error");
  }
};

export default async function Requests() {
  const serviceRequests = await getAllRequests();

  return (
    <>
      <PageTitle></PageTitle>
      <ul className="space-y-2">
        {serviceRequests?.map((request, index) => (
          <li key={index} className="flex items-center gap-2">
            <Image
              src={request.requestor.avatar}
              alt="profile"
              width={250}
              height={250}
              className="h-10 w-10 rounded-full object-cover"
            />
            {request.requestor.fullName}
          </li>
        ))}
      </ul>
    </>
  );
}
