import { IsString, Matches } from "class-validator";

export default class GetWorkplacesDto {
  @IsString({ message: "city query param is required." })
  @Matches(/^[a-zA-ZÀ-ÿ\s-]+$/, {
    message: "state query param contains invalid characteres.",
  })
  city: string;

  @IsString({ message: "state query param is required." })
  @Matches(/^[a-zA-ZÀ-ÿ\s-]+$/, {
    message: "state query param contains invalid characteres.",
  })
  state: string;
}
