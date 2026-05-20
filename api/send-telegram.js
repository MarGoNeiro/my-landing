export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, project, message } = req.body;

  const projectLabels = {
    website: 'Сайт / лендинг',
    app: 'Веб-приложение',
    ai: 'ИИ-агент / автоматизация',
    other: 'Другое',
  };

  const text = [
    '🔔 <b>Новая заявка с сайта</b>',
    '',
    `👤 <b>Имя:</b> ${name}`,
    `📧 <b>Email:</b> ${email}`,
    `🛠 <b>Проект:</b> ${projectLabels[project] || 'Не указан'}`,
    `💬 <b>Задача:</b> ${message || 'Не указана'}`,
  ].join('\n');

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
}
