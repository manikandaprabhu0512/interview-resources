import {
  HeroSection,
  StatGrid,
  QuoteBlock,
  LearningRoadmap,
  SectionHeader,
  ComparisonGrid,
  SkillTree,
  ChecklistSection,
  CTASection,
  GuideDivider,
} from "@/components/guide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is LLD?",
};

export default function LowLevelDesignPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 text-gray-800">
      {/* Hero */}

      <HeroSection
        eyebrow="Learning Guide"
        title="Low Level Design"
        description="The art of turning requirements into maintainable software."
      />

      <StatGrid
        stats={[
          {
            value: "15",
            label: "Design Patterns",
          },
          {
            value: "20+",
            label: "UML Diagrams",
          },
          {
            value: "100+",
            label: "Code Examples",
          },
        ]}
      />

      <GuideDivider />

      {/* Intro */}

      <QuoteBlock quote="Low Level Design is the bridge between requirements and code." />

      <GuideDivider />

      {/* What is LLD */}

      <SectionHeader
        title="What is Low Level Design?"
        description="Low Level Design focuses on how software is implemented internally. It defines classes, interfaces, responsibilities, relationships, and object interactions."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="text-xl font-semibold mb-6">Questions LLD Answers</h3>

          <ul className="space-y-4 text-gray-700">
            <li>Which classes should exist?</li>
            <li>What responsibility does each class have?</li>
            <li>How should objects communicate?</li>
            <li>Where should business logic live?</li>
            <li>How can the code remain maintainable?</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="text-xl font-semibold mb-6">Why It Matters</h3>

          <ul className="space-y-4 text-gray-700">
            <li>Reduce coupling</li>
            <li>Improve maintainability</li>
            <li>Increase extensibility</li>
            <li>Simplify testing</li>
            <li>Make systems easier to evolve</li>
          </ul>
        </div>
      </div>

      <GuideDivider />

      {/* Learning Journey */}

      <SectionHeader
        title="The Learning Journey"
        description="Design patterns are not the starting point."
      />

      <LearningRoadmap
        items={["OOP", "SOLID", "Design Patterns", "LLD Interviews"]}
      />

      <GuideDivider />

      {/* Foundation */}

      <SectionHeader
        title="The Foundation of LLD"
        description="Everything in Low Level Design is built on these three pillars."
      />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold mb-6">OOP</h3>

          <ul className="space-y-3 text-gray-600">
            <li>Classes</li>
            <li>Objects</li>
            <li>Interfaces</li>
            <li>Composition</li>
            <li>Polymorphism</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold mb-6">SOLID</h3>

          <ul className="space-y-3 text-gray-600">
            <li>Single Responsibility</li>
            <li>Open / Closed</li>
            <li>Liskov Substitution</li>
            <li>Interface Segregation</li>
            <li>Dependency Inversion</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold mb-6">Patterns</h3>

          <p className="text-gray-600 leading-8">
            Reusable solutions to recurring design problems. They help create
            systems that are easier to extend, test, and maintain.
          </p>
        </div>
      </div>

      <GuideDivider />

      {/* HLD vs LLD */}

      <SectionHeader
        title="HLD vs LLD"
        description="Two different levels of design."
      />

      <ComparisonGrid
        left={{
          title: "HLD",
          description: "System Level",
          items: [
            "Services",
            "Databases",
            "Caching",
            "Message Queues",
            "Infrastructure",
          ],
        }}
        right={{
          title: "LLD",
          description: "Code Level",
          items: [
            "Classes",
            "Interfaces",
            "Patterns",
            "Responsibilities",
            "Object Collaboration",
          ],
        }}
      />

      <GuideDivider />

      {/* Patterns */}

      <SectionHeader
        title="Where Do Design Patterns Fit?"
        description="Patterns are reusable solutions to recurring design problems."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="font-semibold text-xl mb-4">Common Problem</h3>

          <p className="text-gray-600">
            Multiple algorithms for the same task.
          </p>

          <div className="mt-6 text-green-600 font-medium">
            Strategy Pattern
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="font-semibold text-xl mb-4">Common Problem</h3>

          <p className="text-gray-600">Object creation becomes complex.</p>

          <div className="mt-6 text-green-600 font-medium">Factory Pattern</div>
        </div>

        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="font-semibold text-xl mb-4">Common Problem</h3>

          <p className="text-gray-600">Components need notifications.</p>

          <div className="mt-6 text-green-600 font-medium">
            Observer Pattern
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 p-8">
          <h3 className="font-semibold text-xl mb-4">Common Problem</h3>

          <p className="text-gray-600">Undo or rollback functionality.</p>

          <div className="mt-6 text-green-600 font-medium">Memento Pattern</div>
        </div>
      </div>

      <GuideDivider />

      {/* Skill Tree */}

      <SectionHeader
        title="Recommended Pattern Learning Order"
        description="Learn patterns in a progression that builds understanding."
      />

      <SkillTree
        levels={[
          {
            title: "Level 1",
            description: "Foundations",
            patterns: ["Strategy", "Factory", "Singleton", "Observer"],
          },
          {
            title: "Level 2",
            description: "Intermediate",
            patterns: ["Decorator", "Command", "Facade", "Prototype"],
          },
          {
            title: "Level 3",
            description: "Advanced",
            patterns: [
              "State",
              "Template Method",
              "Chain of Responsibility",
              "Mediator",
            ],
          },
          {
            title: "Level 4",
            description: "Expert",
            patterns: ["Visitor", "Memento"],
          },
        ]}
      />

      <GuideDivider />

      {/* Interviews */}

      <ChecklistSection
        title="What Interviewers Evaluate"
        description="Interviewers rarely ask you to identify patterns directly."
        items={[
          "Object Modeling",
          "Class Responsibilities",
          "OOP Principles",
          "SOLID Principles",
          "Extensibility",
          "Tradeoff Analysis",
          "Maintainability",
          "Communication",
        ]}
      />

      <GuideDivider />

      {/* Final Message */}

      <QuoteBlock quote="The goal is not to use every design pattern. The goal is to build maintainable software." />

      <GuideDivider />

      {/* CTA */}

      <CTASection
        title="Ready to Start Learning?"
        description="Begin with the OOPs fundamentals and build your understanding one pattern at a time."
        href="/lld/oop-fundamentals"
        buttonText="Start Learning"
      />
    </div>
  );
}
