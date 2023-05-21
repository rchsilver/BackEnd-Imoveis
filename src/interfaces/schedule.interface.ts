import z from "zod";
import {
  scheduleSchema,
  scheduleSchemaRequest,
} from "../schemas/schedule.schema";

type TSchedule = z.infer<typeof scheduleSchema>;
type TScheduleResponse = z.infer<typeof scheduleSchemaRequest>;

export { TSchedule, TScheduleResponse };
