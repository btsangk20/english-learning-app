import { Button, Group, Paper, Stack, Text } from '@mantine/core';

import { IIPASection } from '@/data/ipa';
import { IconPlayerPlay } from '@tabler/icons-react';

export function IPASection({
  symbol,
  description,
  vietnameseDescription,
  examples,
  audioUrl,
}: IIPASection) {
  const playSound = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      const utterance = new SpeechSynthesisUtterance(examples[0].word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Paper p='md' withBorder>
      <Stack gap='md'>
        <Group justify='space-between'>
          <Text size='xl' fw={700}>
            {symbol}
          </Text>
          <Button
            leftSection={<IconPlayerPlay size={16} />}
            onClick={playSound}
            variant='light'
          >
            Nghe âm
          </Button>
        </Group>

        <Stack gap='xs'>
          <Text size='sm' fw={500}>
            {description}
          </Text>
          <Text size='sm' color='dimmed'>
            {vietnameseDescription}
          </Text>
        </Stack>

        <Stack gap='xs'>
          <Text size='sm' fw={500}>
            Ví dụ:
          </Text>
          {examples.map((example, index) => (
            <Group key={index} gap='xs'>
              <Text size='sm'>{example.word}</Text>
              <Text size='sm' color='dimmed'>
                /{example.pronunciation}/
              </Text>
              <Text size='sm' color='dimmed'>
                - {example.meaning}
              </Text>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}
