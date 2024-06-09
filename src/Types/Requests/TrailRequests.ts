export interface IdProps {
  id: string;
}

export interface CreateAndUpdateTrailProps {
  image_path?: string;
  description?: string;
  video_description?: string;
  name?: string;
  references?: string;
  subtitle?: string;
  video_title?: string;
}

export interface LimitAndPageProps {
  limit: number;
  skip: number;
}
