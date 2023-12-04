package KANEC.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KANEC.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Спрос
 */
@Entity(name = "IISKANECСпрос")
@Table(schema = "public", name = "Спрос")
public class Spros {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "КатегорНомера")
    private Integer категорномера;

    @Column(name = "ЗанятВМесяц")
    private Integer занятвмесяц;

    @Column(name = "Юридич")
    private Boolean юридич;

    @Column(name = "БроньЧерСайт")
    private Boolean броньчерсайт;

    @Column(name = "СкПриДлитПрожив")
    private Boolean скпридлитпрожив;

    @Column(name = "СкДР")
    private Boolean скдр;

    @Column(name = "СкВторНомер")
    private Boolean сквторномер;

    @Column(name = "СуммСоСкид")
    private Integer суммсоскид;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Marketolog")
    @Convert("Marketolog")
    @Column(name = "Маркетолог", length = 16, unique = true, nullable = false)
    private UUID _marketologid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Marketolog", insertable = false, updatable = false)
    private Marketolog marketolog;


    public Spros() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Integer getКатегорНомера() {
      return категорномера;
    }

    public void setКатегорНомера(Integer категорномера) {
      this.категорномера = категорномера;
    }

    public Integer getЗанятВМесяц() {
      return занятвмесяц;
    }

    public void setЗанятВМесяц(Integer занятвмесяц) {
      this.занятвмесяц = занятвмесяц;
    }

    public Boolean getЮридич() {
      return юридич;
    }

    public void setЮридич(Boolean юридич) {
      this.юридич = юридич;
    }

    public Boolean getБроньЧерСайт() {
      return броньчерсайт;
    }

    public void setБроньЧерСайт(Boolean броньчерсайт) {
      this.броньчерсайт = броньчерсайт;
    }

    public Boolean getСкПриДлитПрожив() {
      return скпридлитпрожив;
    }

    public void setСкПриДлитПрожив(Boolean скпридлитпрожив) {
      this.скпридлитпрожив = скпридлитпрожив;
    }

    public Boolean getСкДР() {
      return скдр;
    }

    public void setСкДР(Boolean скдр) {
      this.скдр = скдр;
    }

    public Boolean getСкВторНомер() {
      return сквторномер;
    }

    public void setСкВторНомер(Boolean сквторномер) {
      this.сквторномер = сквторномер;
    }

    public Integer getСуммСоСкид() {
      return суммсоскид;
    }

    public void setСуммСоСкид(Integer суммсоскид) {
      this.суммсоскид = суммсоскид;
    }


}