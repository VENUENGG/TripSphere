import { Wallet, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import BudgetForm from "./BudgetForm";
import BudgetResult from "./BudgetResult";
import useBudget from "../../hooks/useBudget";

export default function BudgetPlanner() {
  const { result, calculate } = useBudget();

  return (
    <section className="relative mx-auto mt-36 max-w-7xl px-6">

      <div className="absolute left-0 top-0 -z-10 h-80 w-80 rounded-full bg-slate-200/40 blur-[120px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-100/40 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="mb-16 text-center"
      >

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">

          <Wallet
            size={18}
            className="text-blue-600"
          />

          <span className="text-sm font-semibold text-slate-700">
            Budget Planner
          </span>

        </div>

        <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">

          Plan Your Budget
          <br />
          Before You Fly

        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">

          Instantly estimate your total travel expenses including
          accommodation, transport, food, sightseeing and miscellaneous
          costs before starting your journey.

        </p>

      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="glass rounded-[36px] border border-white/50 p-8 shadow-[0_30px_80px_rgba(15,23,42,.08)]"
        >

          <div className="mb-8 flex items-center justify-between">

            <div>

              <h3 className="text-3xl font-black text-slate-900">
                Trip Details
              </h3>

              <p className="mt-2 text-slate-500">
                Fill in your travel information.
              </p>

            </div>

            <div className="rounded-2xl bg-slate-900 p-4 text-white">

              <Sparkles size={24} />

            </div>

          </div>

          <BudgetForm
            onCalculate={calculate}
          />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="glass rounded-[36px] border border-white/50 p-8 shadow-[0_30px_80px_rgba(15,23,42,.08)]"
        >

          <div className="mb-8">

            <h3 className="text-3xl font-black text-slate-900">
              Cost Summary
            </h3>

            <p className="mt-2 text-slate-500">
              AI estimated travel expenses.
            </p>

          </div>

          <BudgetResult
            result={result}
          />

        </motion.div>

      </div>

    </section>
  );
}