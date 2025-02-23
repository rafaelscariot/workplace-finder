import { validateOrReject } from "class-validator";
import { plainToInstance } from "class-transformer";

export const validatesObjects = async (dto: any, obj: any) => {
  const instance = plainToInstance(dto, obj);

  await validateOrReject(instance).catch((error) => {
    throw error;
  });
};
