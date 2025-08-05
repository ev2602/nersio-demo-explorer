"use client"

export async function fetchAnimals() {
    const response = await fetch('/api/animals')
    if (!response.ok) {
        throw new Error("Fetching Animals failed")
    }
    const json = await response.json()
    return json.data

}

export async function fetchAnimalByID(id: number) {
    const response = await fetch(`/api/animals/${id}`)
    if (!response.ok) {
        throw new Error("Fetching Animals failed")
    }
    const json = await response.json()
    return json.data
}