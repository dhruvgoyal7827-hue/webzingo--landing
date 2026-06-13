export interface RegisterClientResponse {
  _id?: string;
  firebaseUid: string;
  name: string;
  email: string;
  [key: string]: any;
}

export async function registerClient(
  firebaseUid: string,
  name: string,
  email: string
): Promise<RegisterClientResponse> {
  const apiUrl = import.meta.env.VITE_API_URL || "https://webzingo-backend-production.up.railway.app";
  
  const response = await fetch(`${apiUrl}/api/clients/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firebaseUid,
      name,
      email,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Failed to register client: ${response.statusText}`);
  }

  return response.json();
}
