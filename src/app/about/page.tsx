import { Bot, Cpu } from "lucide-react";
import { clsx } from "clsx";
import { maple, nunito } from "@/lib/font";
import type { ReactNode } from "react";

const stack = [
    { key: "framework", value: "\"Next.js\"" },
    { key: "content", value: "\"MDX\"" },
    { key: "style", value: "\"Tailwind CSS\"" },
    { key: "motion", value: "\"Framer Motion\"" },
    { key: "focus", value: "[\"Program Language\", \"Cloud Native\", \"BigData\", \"AI Infra\"]" },
];

export default function About() {
    return (
        <section className="container-root min-h-screen py-16 md:py-24">
            <div className="flex items-center gap-4 mb-12 translate-x-1">
                <span className="h-px w-12 bg-zinc-600"></span>
                <span className={ clsx("text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400", maple.className) }>
                    Site / Profile
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5">
                    <div className="sticky top-24 border-l border-zinc-200 pl-6 dark:border-zinc-900">
                        <p className={ clsx("mb-5 text-xs font-bold uppercase tracking-[0.35em] text-blue-500", maple.className) }>
                            about csh0101
                        </p>
                        <h1 className={ clsx(
                            "max-w-sm text-4xl font-black leading-snug tracking-tight text-zinc-900 dark:text-white md:text-5xl",
                            nunito.className
                        ) }>
                            Infra, language, and dreams.
                        </h1>
                        <p className="mt-7 max-w-md text-base leading-8 text-zinc-600 dark:text-zinc-400">
                            恭华早修居余位，楼台晚证失道果。
                        </p>
                        <SiteTimeline/>
                    </div>
                </div>

                <div className="lg:col-span-7 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AboutBlock
                            icon={ <Cpu size={ 20 }/> }
                            title="Cloud Native"
                            body="关注基础设施的可演进性：从容器、调度、可观测到平台工程，让系统稳定承载更大的想象。"
                        />
                        <AboutBlock
                            icon={ <Bot size={ 20 }/> }
                            title="AI Infra"
                            body="把模型、数据、算力与工程链路连接起来，让 AI 不只停留在 demo，而是进入可持续迭代的系统。"
                        />
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 shadow-2xl shadow-zinc-300/40 dark:border-white/10 dark:shadow-none">
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                                <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                                <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                            </div>
                            <div className={ clsx("flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600", maple.className) }>
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                site.ts
                            </div>
                        </div>

                        <div className={ clsx("relative p-6 md:p-8 font-mono text-sm overflow-y-auto", maple.className) }>
                            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"></div>
                            <CodeLine number="01">
                                <span className="text-blue-400">const</span>
                                <span className="text-white"> site</span>
                                <span className="text-zinc-500"> = { "{" }</span>
                            </CodeLine>
                            { stack.map((item, index) => (
                                <CodeLine key={ item.key } number={ String(index + 2).padStart(2, "0") }>
                                    <span className="pl-8 text-zinc-400">{ item.key }:</span>
                                    <span className="text-emerald-400"> { item.value }</span>
                                    <span className="text-zinc-500">,</span>
                                </CodeLine>
                            )) }
                            <CodeLine number="07">
                                <span className="text-zinc-500">{ "}" }</span>
                            </CodeLine>
                            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                                <Cpu size={ 14 }/>
                                built with discipline, shipped with imagination
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const AboutBlock = ({ icon, title, body }: {
    icon: ReactNode;
    title: string;
    body: string;
}) => {
    return (
        <article className="group rounded-2xl border border-zinc-200/80 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-950/20 dark:hover:border-blue-500/40 dark:hover:bg-zinc-900/30">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-950/30 dark:text-blue-400">
                { icon }
            </div>
            <h2 className={ clsx("text-lg font-black text-zinc-900 dark:text-white", nunito.className) }>
                { title }
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                { body }
            </p>
        </article>
    );
};

const PixelCamera = () => {
    return (
        <div className="mt-14 hidden w-fit select-none md:block" aria-hidden="true">
            <div className="relative h-40 w-44">
                <div className={ clsx("absolute left-1 top-0 border-2 border-zinc-800 bg-zinc-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-800 shadow-[4px_4px_0_rgba(24,24,27,0.1)] dark:border-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:shadow-[4px_4px_0_rgba(255,255,255,0.05)]", maple.className) }>
                    Camera
                </div>
                <div className="absolute left-10 top-7 h-6 w-0.5 bg-zinc-800 dark:bg-zinc-200"></div>
                <div className="absolute left-8 top-12 h-2 w-2 bg-zinc-800 dark:bg-zinc-200"></div>
                <div className="absolute bottom-0 left-5 h-4 w-28 bg-zinc-200/80 dark:bg-zinc-900"></div>
                <div className="absolute bottom-3 left-0 h-20 w-36 border-4 border-zinc-800 bg-zinc-100 shadow-[10px_10px_0_rgba(24,24,27,0.08)] dark:border-zinc-200 dark:bg-zinc-900 dark:shadow-[10px_10px_0_rgba(255,255,255,0.04)]">
                    <div className="absolute -top-7 left-5 h-7 w-16 border-4 border-b-0 border-zinc-800 bg-zinc-100 dark:border-zinc-200 dark:bg-zinc-900"></div>
                    <div className="absolute -top-4 right-4 h-4 w-8 bg-blue-500"></div>
                    <div className="absolute left-4 top-4 h-5 w-8 bg-zinc-800 dark:bg-zinc-200"></div>
                    <div className="absolute right-4 top-4 h-3 w-3 bg-emerald-400"></div>

                    <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 border-4 border-zinc-800 bg-zinc-300 dark:border-zinc-200 dark:bg-zinc-700">
                        <div className="absolute inset-2 bg-zinc-900 dark:bg-zinc-100"></div>
                        <div className="absolute right-2 top-2 h-2 w-2 bg-blue-300"></div>
                    </div>
                </div>
                <div className="absolute bottom-12 right-0 h-4 w-4 bg-blue-500"></div>
                <div className="absolute bottom-7 right-4 h-3 w-3 bg-zinc-300 dark:bg-zinc-700"></div>
            </div>
        </div>
    );
};

const CodeLine = ({ number, children }: {
    number: string;
    children: ReactNode;
}) => {
    return (
        <div className="relative z-10 flex gap-4 py-1.5 whitespace-nowrap">
            <span className="w-6 shrink-0 text-right text-zinc-700">{ number }</span>
            <span>{ children }</span>
        </div>
    );
};

const timeline = [
    {
        year: "2018",
        title: "语言与系统",
        desc: "从程序语言与工程基础开始，理解抽象如何落到真实系统里。",
    },
    {
        year: "2019",
        title: "云原生视角",
        desc: "开始关注容器、Kubernetes 与基础设施平台化，追求稳定、弹性与可维护。",
    },
    {
        year: "2021",
        title: "数据与平台",
        desc: "深入 BigData 与工程链路，把数据处理、服务治理和平台能力串联起来。",
    },
    {
        year: "2023",
        title: "AI Infra",
        desc: "面向模型、数据、算力和应用交付，探索 AI 时代的基础设施形态。",
    },
    {
        year: "2026",
        title: "筑梦缔造者",
        desc: "持续构建可被复用、可被信任、也能承载想象力的技术系统。",
    },
];

const SiteTimeline = () => {
    return (
        <div className="mt-14 select-none" aria-hidden="true">
            <p className={ clsx("mb-6 text-xs font-bold uppercase tracking-[0.35em] text-blue-500", maple.className) }>
                dream evolution
            </p>
            <div className="relative border-l border-zinc-200 dark:border-zinc-900 space-y-8">
                { timeline.map((item, _) => (
                    <div key={ item.year } className="relative pl-6">
                        <span className="absolute left-0 top-0.5 -translate-x-1/2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"/>
                        </span>
                        <span className={ clsx("text-[10px] font-bold uppercase tracking-widest text-zinc-400", maple.className) }>
                            { item.year }
                        </span>
                        <h3 className={ clsx("mt-1 font-black text-zinc-900 dark:text-white", nunito.className) }>
                            { item.title }
                        </h3>
                        <p className="mt-1 text-[14px] leading-6 text-zinc-500 dark:text-zinc-400 max-w-xs">
                            { item.desc }
                        </p>
                    </div>
                )) }
            </div>
        </div>
    );
};
