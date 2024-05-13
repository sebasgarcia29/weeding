type Data = {
  url_whatsapp: string;
  url_location: string;
  date: string;
  location: string;
  gretting: string;
  groom: {
    name: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
        account_number: string;
      };
      father: {
        name: string;
        account_number: string;
      };
    };
  };
  bride: {
    name: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
        account_number: string;
      };
      father: {
        name: string;
        account_number: string;
      };
    };
  };
  kakaotalk: {
    api_token: string;
    wedding_invitation_url: string;
    share_image: string;
  };
};
