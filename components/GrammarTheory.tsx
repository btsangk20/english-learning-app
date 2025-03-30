import { Box, List, Text, Title } from '@mantine/core';

interface Example {
  sentence: string;
  translation: string;
}

interface GrammarRule {
  pattern: string;
  explanation: string;
  examples: Example[];
}

interface GrammarTheoryProps {
  title: string;
  description: string;
  rules: GrammarRule[];
}

export function GrammarTheory({
  title,
  description,
  rules,
}: GrammarTheoryProps) {
  return (
    <Box className='mb-8 p-6 bg-gray-50 rounded-lg'>
      <Title order={3} className='mb-4 text-gray-800'>
        {title}
      </Title>
      <Text className='mb-6 text-gray-600'>{description}</Text>

      <div className='space-y-6'>
        {rules.map((rule, index) => (
          <Box key={index} className='bg-white p-4 rounded-md shadow-sm'>
            <Text className='font-semibold mb-2 text-blue-600'>
              Cấu trúc: {rule.pattern}
            </Text>
            <Text className='mb-3 text-gray-700'>{rule.explanation}</Text>

            <Text className='font-medium mb-2 text-gray-700'>Ví dụ:</Text>
            <List spacing='xs'>
              {rule.examples.map((example, idx) => (
                <List.Item key={idx}>
                  <Text className='text-gray-800'>{example.sentence}</Text>
                  <Text className='text-gray-600 text-sm'>
                    {example.translation}
                  </Text>
                </List.Item>
              ))}
            </List>
          </Box>
        ))}
      </div>
    </Box>
  );
}
