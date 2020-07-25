import { RootState } from 'app/rootReducer';
import { Profile } from '../profileSlice';
import { WithRequired } from 'app/typeUtils';
import { ProfileTemplateFields } from '../helpers/profileTemplate';

export const getIsActiveSelector = (
  profile: WithRequired<Profile, ProfileTemplateFields>
) => (state: RootState): boolean =>
  state.profile.activeProfileId === profile.profileId;
