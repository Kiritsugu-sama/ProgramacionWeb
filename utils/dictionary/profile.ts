export interface ProfileTranslations {
    profile_title: string;
    profile_email: string;
    profile_fullName: string;
    profile_age: string;
    profile_gender: string;
    profile_maritalStatus: string;
  }
  
  export const defaultProfileTranslations: ProfileTranslations = {
    profile_title: "profile_title",
    profile_email: "profile_email",
    profile_fullName: "profile_fullName",
    profile_age: "profile_age",
    profile_gender: "profile_gender",
    profile_maritalStatus: "profile_maritalStatus",
  };
  
  export const profileTranslations: Record<"es" | "en", ProfileTranslations> = {
    es: {
      profile_title: "Perfil",
      profile_email: "Correo electrónico",
      profile_fullName: "Nombre completo",
      profile_age: "Edad",
      profile_gender: "Género",
      profile_maritalStatus: "Estado civil",
    },
    en: {
      profile_title: "Profile",
      profile_email: "Email",
      profile_fullName: "Full Name",
      profile_age: "Age",
      profile_gender: "Gender",
      profile_maritalStatus: "Marital Status",
    },
  };
  