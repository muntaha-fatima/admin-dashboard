// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04'

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// )
// export const token = assertValue(
//   'sky0pECzxiaYqkJAvf3HHofNr8cgQb1tO6KHCQHYzjFlv3wEC7N0Qie59s157tfsJgSCtcrP3w3UelUSfZuypjOOjIhtsGJvb4AQce8IWVfOlHPSs5r3W5G9qmCcC3ej08Pc85XGLaKLYlbuWkqh0BY8pq0nkbrNzFrs5u455KrxZEd3KR10',
//   'Missing environment variable: NEXT_API_TOKEN'
// )

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage)
//   }

//   return v
// }



export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN || 'sky0pECzxiaYqkJAvf3HHofNr8cgQb1tO6KHCQHYzjFlv3wEC7N0Qie59s157tfsJgSCtcrP3w3UelUSfZuypjOOjIhtsGJvb4AQce8IWVfOlHPSs5r3W5G9qmCcC3ej08Pc85XGLaKLYlbuWkqh0BY8pq0nkbrNzFrs5u455KrxZEd3KR10',
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}