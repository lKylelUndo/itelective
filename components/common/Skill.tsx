const Skill = ({ skill }: { skill: string }) => {
  return (
    <li className="border border-hairline bg-plate px-2.5 py-1 font-mono text-[12px] text-ink">
      {skill}
    </li>
  )
}

export default Skill
