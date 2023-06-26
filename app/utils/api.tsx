const BASE_URL = "https://api.jikan.moe/v4";

export async function fetchAnimeData(
  endpoint: string,
  params?: Record<string, string>
): Promise<any> {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  // Agregar parámetros de consulta si los hay
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error;
  }
}
