'use client';

import { Container, Stack, Tabs, Text, Title } from '@mantine/core';
import { diphthongs, ipaConsonantData, monophthongs } from '@/data/ipa';

import { IPAPractice } from '@/components/IPAPractice';
import { IPASection } from '@/components/IPASection';

export default function IPAPage() {
  return (
    <Container size='lg' py='xl'>
      <Stack gap='xs'>
        <div>
          <Title order={1} mb='md'>
            Học phát âm theo IPA
          </Title>
          <Text size='lg' color='dimmed'>
            Học cách phát âm từng âm tiết trong tiếng Anh theo Bảng chữ cái
            phiên âm quốc tế (IPA). Mỗi âm được kèm theo ví dụ và hướng dẫn chi
            tiết bằng tiếng Việt.
          </Text>
        </div>

        <Tabs defaultValue='learn'>
          <Tabs.List>
            <Tabs.Tab value='learn'>Học IPA</Tabs.Tab>
            <Tabs.Tab value='practice'>Luyện tập</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='learn' pt='xl'>
            <Stack gap='xs'>
              <Tabs defaultValue='vowels'>
                <Tabs.List>
                  <Tabs.Tab value='vowels'>Nguyên Âm Đơn</Tabs.Tab>
                  <Tabs.Tab value='diphthongs'>Nguyên Âm Đôi</Tabs.Tab>
                  <Tabs.Tab value='consonants'>Phụ Âm</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value='vowels' pt='xl'>
                  <Stack gap='xs'>
                    {monophthongs.map((section) => (
                      <IPASection key={section.symbol} {...section} />
                    ))}
                  </Stack>
                </Tabs.Panel>

                <Tabs.Panel value='diphthongs' pt='xl'>
                  <Stack gap='xs'>
                    {diphthongs.map((section) => (
                      <IPASection key={section.symbol} {...section} />
                    ))}
                  </Stack>
                </Tabs.Panel>

                <Tabs.Panel value='consonants' pt='xl'>
                  <Stack gap='xs'>
                    {ipaConsonantData.map((section) => (
                      <IPASection key={section.symbol} {...section} />
                    ))}
                  </Stack>
                </Tabs.Panel>
              </Tabs>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value='practice' pt='xl'>
            <IPAPractice
              ipaData={[...monophthongs, ...diphthongs, ...ipaConsonantData]}
            />
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  );
}
