import { setAPI } from '@things-factory/board-base'
import * as api from './api-impl'

export default function bootstrap() {
  setAPI(api)
}
