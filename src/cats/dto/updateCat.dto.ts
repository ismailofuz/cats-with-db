import { CreateCatDto } from "./createDto-cat.dto";
import {PartialType, OmitType, PickType} from '@nestjs/mapped-types'

export class UpdateCatDto extends PartialType(CreateCatDto){}