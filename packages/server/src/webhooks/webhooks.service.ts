import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { MessengerService } from '../messenger/messenger.service';

@Injectable()
export class WebhooksService {
  constructor(
    private prisma: PrismaService,
    private messanger: MessengerService,
  ) {}
  async sendPassNotification(id: number) {
    const data = await this.prisma.passes.findUnique({
      where: { id },
      include: {
        students: true,
      },
    });
    const hostel = await this.prisma.college_staff.findFirst({
      where: {
        role: 'warden',
        hostel_id: data.students.hostel_id,
      },
    });
    const studentClass = await this.prisma.college_staff.findFirst({
      where: {
        role: 'class_advisor',
        class_id: data.students.class_id,
      },
    });
    const department = await this.prisma.college_staff.findFirst({
      where: {
        department_id: data.students.department_id,
      },
    });
    const message =
      `leave request \n` +
      `name : ${data.students.name}\n` +
      `department : ${department.name}\n` +
      `class : ${studentClass.name}\n` +
      `hostel : ${hostel.name}\n` +
      `from : ${new Date(data.start_datetime).toLocaleString()}\n` +
      `to : ${new Date(data.end_datetime).toLocaleString()}\n` +
      `hostel : ${hostel.name}\n`;
    await this.messanger.sendSMS(hostel.phone, message);
    await this.messanger.sendSMS(hostel.phone, message);
    await this.messanger.sendSMS(hostel.phone, message);
    return '';
  }
}
