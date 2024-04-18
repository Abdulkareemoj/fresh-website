import { twMerge } from "tailwind-merge";

type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
};

type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

type Icon = React.ComponentType<React.ComponentProps<"svg">>;

const CTA = (
  { callToAction, containerClass, linkClass, iconClass }: LinkOrButton,
) => {
  const { text, href, icon: Icon, targetBlank } =
    callToAction as CallToActionType;

  return (
    <>
      {href && (text || Icon) && (
        <div className={twMerge("flex w-auto cursor-pointer", containerClass)}>
          {targetBlank
            ? (
              <a
                className={twMerge(
                  "inline-flex items-center justify-center w-full sm:mb-0",
                  linkClass,
                )}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icon && (
                  <Icon
                    className={twMerge(
                      `w-5 h-5 ${
                        text ? "mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5" : ""
                      }`,
                      iconClass,
                    )}
                  />
                )}
                {text}
              </a>
            )
            : (
              <a
                className={twMerge(
                  "inline-flex items-center justify-center w-full sm:mb-0 ",
                  linkClass,
                )}
                href={href}
              >
                {Icon && (
                  <Icon
                    className={twMerge(
                      `w-5 h-5 ${
                        text ? "mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5" : ""
                      }`,
                      iconClass,
                    )}
                  />
                )}
                {text}
              </a>
            )}
        </div>
      )}
    </>
  );
};

export default CTA;
