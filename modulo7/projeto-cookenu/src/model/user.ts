
export type user = {
   id: string
   name: string
   email: string
   password: string
   role: string
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string
   role: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface UserOutput {
   id: string,
   name: string,
   email: string
}