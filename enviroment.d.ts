declare namespace NodeJS{
    export interface ProcessEnv{
        readonly NEXT_PUBLIC_SANITY_PROJECT_ID: string,
        readonly NEXT_PUBLIC_SANITY_DATASET: string,
        // readonly NEXT_PUBLIC_SANITY_API_VERSION=2022-12-22
    }
}