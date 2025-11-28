import { getProject, projects } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition"
      >
        <ArrowLeft size={16} className="mr-2" /> Back to projects
      </Link>

      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>

      <div className="flex gap-3 mb-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20"
          >
            {t}
          </span>
        ))}
      </div>

      <Image
        src={project.image}
        alt="Project Preview"
        width={600}
        height={500}
        className="mx-auto block my-5 rounded-2xl"
      ></Image>

      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
      >
        View Project <ExternalLink size={18} className="ml-2" />
      </a>
    </article>
  );
}
