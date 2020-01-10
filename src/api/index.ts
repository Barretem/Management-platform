import { kangaroo } from './kangaroo';
import defs from './api';
export type apitype = typeof defs;
export const api = { kangaroo } as apitype;
