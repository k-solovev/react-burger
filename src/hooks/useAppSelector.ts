import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../utils/prop-types'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector