/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrcaPriceWhereInput } from "./OrcaPriceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OrcaPriceCountArgs {
  @ApiProperty({
    required: false,
    type: () => OrcaPriceWhereInput,
  })
  @Field(() => OrcaPriceWhereInput, { nullable: true })
  @Type(() => OrcaPriceWhereInput)
  where?: OrcaPriceWhereInput;
}

export { OrcaPriceCountArgs as OrcaPriceCountArgs };
