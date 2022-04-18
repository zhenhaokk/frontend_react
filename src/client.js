import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "1iu043y4",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skq6fVV7UFPZgKIW8wpQrC5wnulc7gAGYaF4qTWnYqWTvs9fE2DF4UCYSPDOu6gNE59J1BJqjmeWv8rMCLsWJztKblBZyrVgbAcn6HSodkzpgqSeZXAe6GzSeT9XWqWH8neFcGphSvHtCPm95NzeQW29Ehe8B6Hk9PHabapAbdfHMxoFbSYC",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
