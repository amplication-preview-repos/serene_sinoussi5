/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RaydiumPriceWhereInput } from "./RaydiumPriceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RaydiumPriceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RaydiumPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => RaydiumPriceWhereInput)
  @IsOptional()
  @Field(() => RaydiumPriceWhereInput, {
    nullable: true,
  })
  every?: RaydiumPriceWhereInput;

  @ApiProperty({
    required: false,
    type: () => RaydiumPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => RaydiumPriceWhereInput)
  @IsOptional()
  @Field(() => RaydiumPriceWhereInput, {
    nullable: true,
  })
  some?: RaydiumPriceWhereInput;

  @ApiProperty({
    required: false,
    type: () => RaydiumPriceWhereInput,
  })
  @ValidateNested()
  @Type(() => RaydiumPriceWhereInput)
  @IsOptional()
  @Field(() => RaydiumPriceWhereInput, {
    nullable: true,
  })
  none?: RaydiumPriceWhereInput;
}
export { RaydiumPriceListRelationFilter as RaydiumPriceListRelationFilter };
