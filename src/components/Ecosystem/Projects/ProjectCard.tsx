import { Avatar, Typography, IconButton, SvgIcon, Chip } from '@mui/material'

import TwitterIcon from '@/public/images/twitter-icon.svg'
import GithubIcon from '@/public/images/github-icon.svg'
import { getProjectCategories } from './project-utils'

import css from './styles.module.css'
import { ECOSYSTEM_DATA_URL } from '@/config/constants'
import { type EcosystemProject } from '@/hooks/useEcosystemData'

export const ProjectCard = (item: EcosystemProject) => {
  const categories = getProjectCategories(item)

  return (
    <div className={css.card}>
      <Avatar className={css.image} src={ECOSYSTEM_DATA_URL + item.logo}>
        &nbsp;
      </Avatar>

      <div className={css.socials}>
        {item.twitter && (
          <IconButton
            aria-label="Twitter link"
            href={item.twitter}
            target="_blank"
            rel="noreferrer"
            size="small"
            sx={{ color: 'primary.light' }}
          >
            <SvgIcon component={TwitterIcon} fontSize="inherit" color="inherit" inheritViewBox />
          </IconButton>
        )}

        {item.github_dev_docs && (
          <IconButton
            aria-label="Github link"
            href={item.github_dev_docs}
            target="_blank"
            rel="noreferrer"
            size="small"
            sx={{ color: 'primary.light' }}
          >
            <SvgIcon component={GithubIcon} fontSize="inherit" color="inherit" inheritViewBox />
          </IconButton>
        )}
      </div>

      <Typography fontWeight="500" mb={0.5}>
        {item.project}
      </Typography>

      <Typography variant="body2" className={css.description}>
        {item.description}
      </Typography>

      <div className={css.categories}>
        {categories.map((category, idx) => {
          return <Chip key={category + idx} className={css.chip} label={category} />
        })}
      </div>
    </div>
  )
}
