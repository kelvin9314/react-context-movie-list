import qs from 'qs'

export const httpQueryBuilder = params => qs.stringify(params)
