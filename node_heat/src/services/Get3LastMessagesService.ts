import prismaClient from "../prisma";


class Get3LastMessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true
      }
    });

    //SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC
    return messages;
  }
}

export { Get3LastMessagesService }