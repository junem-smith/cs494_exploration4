export type Profile = {
    id: string,
    username: string | null,
    full_name: string | null,
    avatar_url: string | null,
    website: string | null
}


export const profileSelectorString = "id, username, full_name, avater_url, website"