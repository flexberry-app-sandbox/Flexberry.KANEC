package KANEC.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KANEC.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЦелеваяАудит
 */
@Entity(name = "IISKANECЦелеваяАудит")
@Table(schema = "public", name = "ЦелеваяАудит")
public class CelevayaAudit {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ДатаРожд")
    private String датарожд;

    @Column(name = "Пол")
    private String пол;

    @Column(name = "Возраст")
    private Integer возраст;

    @Column(name = "Национальн")
    private String национальн;

    @Column(name = "СемейнПол")
    private String семейнпол;

    @Column(name = "Образование")
    private String образование;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Marketolog")
    @Convert("Marketolog")
    @Column(name = "Маркетолог", length = 16, unique = true, nullable = false)
    private UUID _marketologid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Marketolog", insertable = false, updatable = false)
    private Marketolog marketolog;


    public CelevayaAudit() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getДатаРожд() {
      return датарожд;
    }

    public void setДатаРожд(String датарожд) {
      this.датарожд = датарожд;
    }

    public String getПол() {
      return пол;
    }

    public void setПол(String пол) {
      this.пол = пол;
    }

    public Integer getВозраст() {
      return возраст;
    }

    public void setВозраст(Integer возраст) {
      this.возраст = возраст;
    }

    public String getНациональн() {
      return национальн;
    }

    public void setНациональн(String национальн) {
      this.национальн = национальн;
    }

    public String getСемейнПол() {
      return семейнпол;
    }

    public void setСемейнПол(String семейнпол) {
      this.семейнпол = семейнпол;
    }

    public String getОбразование() {
      return образование;
    }

    public void setОбразование(String образование) {
      this.образование = образование;
    }


}