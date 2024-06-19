'use client';
import { AppShell, Paper, Menu, Avatar, ActionIcon, rem, Burger, Group, NavLink, FileButton, Text, Tooltip } from '@mantine/core';
import { IconChevronRight, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconSettings, IconUser, IconDatabase, IconStar, IconTrash, IconCirclePlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import NASJSpic from '/public/LOGO-with-text.png';
import Bgpic from '/public/Light-Gradient.png';
import Image from 'next/image';
import { useState } from 'react';
import { useSearchParams  } from 'next/navigation';

export default function FullLayout() {

    const searchParams = useSearchParams();
    const Username = searchParams.get('username');
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(Username)
    const [opened, { toggle }] = useDisclosure();

    return (

        <>
            <div className=' fixed bottom-8 right-10 md:bottom-20 md:right-20 z-[100]'>

                <FileButton className=' z-50' onChange={setFile}>
                    {(props) => <ActionIcon radius="xl" color='blue' variant="filled" size={50} {...props} aria-label="Settings">
                        <Tooltip label="Upload File">
                            <IconCirclePlus color='white' style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </Tooltip>
                    </ActionIcon>}
                </FileButton>

            </div>
            <Image
                alt="NAS Js Logo"
                src={Bgpic}
                quality={100}
         
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    opacity: '50%',

                }}
            />

            <AppShell
                style={{ background: "transparent" }}
                header={{ height: 60 }}
                navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
            >


                <AppShell.Header style={{ background: "transparent" }}>
                    <Group h="100%" px="md" justify="space-between">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        <Image src={NASJSpic} alt='Logo' width={100} />

                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <Avatar size={30} />
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Label>Welcome <b>{username}</b></Menu.Label>
                                <Menu.Divider />
                                <Menu.Label>Application</Menu.Label>
                                <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                    Settings
                                </Menu.Item>
                                <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                                    Messages
                                </Menu.Item>
                                <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                                    Gallery
                                </Menu.Item>
                                <Menu.Item
                                    leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
                                    rightSection={
                                        <Text size="xs" c="dimmed">
                                            ⌘K
                                        </Text>
                                    }
                                >
                                    Search
                                </Menu.Item>

                                <Menu.Divider />

                                <Menu.Label>Danger zone</Menu.Label>
                                <Menu.Item
                                    leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
                                >
                                    Transfer my data
                                </Menu.Item>
                                <Menu.Item
                                    color="red"
                                    leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                                >
                                    Delete my account
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>

                </AppShell.Header>


                <AppShell.Navbar style={{ background: "transparent" }} >
                    <NavLink
                        href="#required-for-focus"
                        label="User"
                        leftSection={<IconUser size="1rem" stroke={1.5} />}
                    />
                    <NavLink
                        href="#required-for-focus"
                        label="Your File"
                        leftSection={<IconDatabase size="1rem" stroke={1.5} />}
                        rightSection={
                            <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                        }
                    />

                    <NavLink
                        href="#required-for-focus"
                        label="Starred"
                        leftSection={<IconStar size="1rem" stroke={1.5} />}
                        rightSection={
                            <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                        }


                    />
                    <NavLink
                        href="#required-for-focus"
                        label="Trash"
                        leftSection={<IconTrash size="1rem" stroke={1.5} />}
                        rightSection={
                            <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                        }

                    />
                </AppShell.Navbar>


                <AppShell.Main style={{ background: "transparent" }}>


                    {file && (
                        <Paper shadow="xs" p="xl">
                            <Text size="sm" mt="sm">
                                {file.name}
                            </Text>
                        </Paper>
                    )}


                </AppShell.Main>



            </AppShell>
        </>
    );
}