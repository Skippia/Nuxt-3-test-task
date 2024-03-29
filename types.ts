export interface TUser {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface TUserMiscellaneous {
  id: number
  comment: string
  points: number
}

export interface TUserFull extends TUser, TUserMiscellaneous {}

export interface TUpdatedUserCardEvent {
  id: TUserFull['id']
  points: TUserMiscellaneous['points']
}
